import { Feather } from "@expo/vector-icons"

export const icon = {
    home: (props: any) => <Feather name='home' size={24} color={"#fff"} {...props} />,
    explore: (props: any) => <Feather name='compass' size={24} color={"#fff"} {...props} />,
    profile: (props: any) => <Feather name='user' size={24} color={"#fff"} {...props} />,
}