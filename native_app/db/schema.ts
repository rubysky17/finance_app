import { relations, sql } from 'drizzle-orm';
import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';
import { createSelectSchema } from 'drizzle-zod';
import { z } from 'zod';


// * Tables
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

export const transactions = sqliteTable('transactions', {
    id: text('id').primaryKey().$defaultFn(() => createId()).notNull(),
    name: text('name').notNull(),
    price: integer('price').notNull(),
    description: text('description'),
    hasCountInReport: integer('enable', { mode: 'boolean' }).default(true),
    createdDate: text('created_date').default(sql`CURRENT_TIMESTAMP`),
    walletId: text('wallet_id').references(() => wallets.id),
});

// * Relations
export const walletsRelations = relations(wallets, ({ many }) => ({
    transactions: many(transactions),
}));

export const walletTypesRelations = relations(walletTypes, ({ many }) => ({
    wallets: many(wallets),
}));

// * Schemas
export const WalletSchema = createSelectSchema(wallets);
export const WalletTypeSchema = createSelectSchema(walletTypes);
export const TransactionSchema = createSelectSchema(transactions);


// * Types
export type Wallets = z.infer<typeof WalletSchema>;
export type WalletTypes = z.infer<typeof WalletTypeSchema>;
export type Transactions = z.infer<typeof TransactionSchema>;
