import { extendType, nonNull, objectType, stringArg } from "nexus";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
        t.nonNull.string("token");
        t.nonNull.field("user", {
            type: "User",
        });
    },
});

export const AuthMutation = extendType({
    type: "Mutation",
    definition(t) {
        t.nonNull.field("signup", {
            type: "AuthPayload",
            args: {
                name: nonNull(stringArg()),
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            async resolve(parent, args, context) {
                const { email, name } = args;

                const password = await bcrypt.hash(args.password, 10);

                const user = await context.prisma.user.create({
                    data: { name, email, password },
                });

                const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET as string);

                return {
                    token,
                    user,
                };
            },
        });

        t.nonNull.field("login", {
            type: "AuthPayload",
            args: {
                email: nonNull(stringArg()),
                password: nonNull(stringArg()),
            },
            async resolve(parent, args, context) {
                const user = await context.prisma.user.findUnique({
                    where: { email: args.email },
                });

                if(!user) {
                    throw new Error("User not found");
                }

                const valid = await bcrypt.compare(
                    args.password,
                    user.password,
                );

                if(!valid) {
                    throw new Error("Invalid password");
                };

                const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET as string);

                return {
                    token,
                    user,
                };
            },
        });
    },
});

