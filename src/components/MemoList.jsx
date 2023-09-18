import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MemoList() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
