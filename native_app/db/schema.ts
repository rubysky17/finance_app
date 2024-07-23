import { relations, sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';

export const walletTypes = sqliteTable('walletTypes', {
    id: text('id').primaryKey().$defaultFn(() => createId()).notNull(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    walletIcon: text('wallet_icon').notNull().default("abc"),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export const wallets = sqliteTable('wallets', {
    id: text('id').primaryKey().$defaultFn(() => createId()).notNull(),
    name: text('name').notNull(),
    description: text('description').notNull(),
    walletTypeId: text('wallet_type_id').references(() => walletTypes.id),
    enable: integer('enable', { mode: 'boolean' }).default(true),
    amount: integer('amount').notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`)
});

export const walletTypesRelations = relations(walletTypes, ({ many }) => ({
    wallets: many(wallets),
}));

export const WalletSchema = createSelectSchema(wallets);
export const WalletTypeSchema = createSelectSchema(walletTypes);

export type Wallets = z.infer<typeof WalletSchema>;
export type WalletTypes = z.infer<typeof WalletTypeSchema>;
