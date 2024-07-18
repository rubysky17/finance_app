import { useDatabase } from "@/db/provider";
import { habitTable } from "@/db/schema";
import { View, Text, Button } from 'react-native-ui-lib';

export default function SkeletonScreen() {
    const { db } = useDatabase();

    const insertDate = async () => {
        try {
            const id = await db?.insert(habitTable).values({
                name: 'Name 1',
                description: "description 2",
                category: "sadasd",
                duration: 2000,
            }).returning()
            console.log("id", id)
        } catch (e) {
            console.log(e)
        }
    }

    return <View>
        <Text>SkeletonScreen</Text>

        <Button label='Import' onPress={insertDate} />
    </View>
}