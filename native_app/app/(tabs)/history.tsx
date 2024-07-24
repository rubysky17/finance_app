import { useDatabase } from "@/db/provider";
import { wallets, walletTypes } from "@/db/schema";
import { SafeAreaView } from "react-native";
import { Text, Button } from 'react-native-ui-lib';

export default function SkeletonScreen() {
    const { db } = useDatabase();

    const insertWalletType = async () => {
        try {
            const id = await db?.insert(walletTypes).values({
                name: "Loại ví 2",
                description: "Tiền trong Loại ví 2",
            }).returning()
            console.log("id", id)
        } catch (e) {
            console.log(e)
        }
    };

    const insertWallet = async () => {
        try {
            const newWallet = {
                name: 'My Wallet Demo 2',
                description: 'This is a description',
                walletTypeId: 'wgjdf5s863bkzz76po5zzdg3',
                amount: 1000,
                enable: true,
            };

            const id = await db?.insert(wallets).values(newWallet).returning();

            console.log("id", id)
        } catch (e) {
            console.log(e)
        }


    }

    return <SafeAreaView>
        <Text>SkeletonScreen</Text>

        <Button label='Tạo loại ví' onPress={() => {
            console.log("runn")
            insertWalletType();
        }} />
        <Button label='Tạo ví' onPress={() => {
            insertWallet()
        }} />
    </SafeAreaView>
}