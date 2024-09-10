import { Text, View, Image } from "react-native";
import { Tabs, Redirect } from "expo-router";

import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', margin: 2}}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={{width: 30, height: 25}}
      />
      {/* <Text
        style={{ color: color }}
      >
        {name}
      </Text> */}
    </View>
  );
};

const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#929999",
          tabBarStyle: {
            backgroundColor: "#253334",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 80,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.homeIcon}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="audio"
          options={{
            title: "Audio",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.soundIcon}
                color={color}
                name="Audio"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.userIcon}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;
