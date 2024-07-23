CREATE TABLE `walletTypes` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`wallet_icon` text DEFAULT 'abc' NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE TABLE `wallets` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`wallet_type_id` text,
	`enable` integer DEFAULT true,
	`amount` integer NOT NULL,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`wallet_type_id`) REFERENCES `walletTypes`(`id`) ON UPDATE no action ON DELETE no action
);
