import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.appbar}>
        <View style={styles.appbarInner}>
          <Text style={styles.appbarTitle}>Memo App</Text>
          <Text style={styles.appbarRight}>ログアウト</Text>
        </View>
      </View>

      {/* memoList */}
      <View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>買い物リスト</Text>
            <Text style={styles.memoListItemDate}>2023年9月16日 7:40</Text>
          </View>
          <View>
            <Text style={styles.memoListItemDelete}>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>ピザ食べ放題</Text>
            <Text style={styles.memoListItemDate}>2023年9月16日 7:40</Text>
          </View>
          <View>
            <Text style={styles.memoListItemDelete}>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>焼肉食べ放題</Text>
            <Text style={styles.memoListItemDate}>2023年9月16日 7:40</Text>
          </View>
          <View>
            <Text style={styles.memoListItemDelete}>X</Text>
          </View>
        </View>
        <View style={styles.memoListItem}>
          <View>
            <Text style={styles.memoListItemTitle}>クリーム食べ放題</Text>
            <Text style={styles.memoListItemDate}>2023年9月16日 7:40</Text>
          </View>
          <View>
            <Text style={styles.memoListItemDelete}>X</Text>
          </View>
        </View>
      </View>

      {/* floatbutton */}
      <View style={styles.circleButton}>
        <Text style={styles.circleButtonLavel}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8",
  },
  appbar: {
    width: "100%",
    height: 104,
    backgroundColor: "#467FD3",
    justifyContent: "flex-end",
  },
  appbarInner: {
    alignItems: "center",
  },
  appbarRight: {
    position: "absolute",
    right: 19,
    bottom: 8,
    color: "rgba(255,255,255,0.7)",
    fontSize: 12,
    lineHeight: 24,
  },
  appbarTitle: {
    marginBottom: 8,
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoListItem: {
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
    color: "rgba(0,0,0,1)",
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },

  memoListItemDelete: {
    color: "#B0B0B0",
    fontSize: 24,
  },
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // shadow系はiOS対応
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはAndroid対応 ※重なり順、高さ
    elevation: 8,
  },
  circleButtonLavel: {
    color: "#fff",
    fontSize: 40,
    lineHeight: 40,
  },
});
