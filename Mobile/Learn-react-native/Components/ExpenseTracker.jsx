import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

const ExpenseTracker = () => {
  const [reason, setReason] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (reason.trim() === "" || amount.trim() === "") return;

    const newExpense = {
      id: Date.now().toString(),
      reason,
      amount: parseFloat(amount),
      date: new Date(),
    };

    setExpenses((prev) => [...prev, newExpense]);
    setReason("");
    setAmount("");
  };

  const getTotal = () =>
    expenses.reduce((sum, item) => sum + item.amount, 0);

  // Filter expenses by date
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();

  const todayExpenses = expenses.filter(
    (e) => e.date.toDateString() === today
  );
  const yesterdayExpenses = expenses.filter(
    (e) => e.date.toDateString() === yesterday
  );

  const renderExpense = ({ item }) => (
    <Text style={styles.expenseItem}>
      • {item.reason} — ₹{item.amount}
    </Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>💰 Expense Tracker</Text>

      {/* Inputs */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Expense Reason"
          value={reason}
          onChangeText={setReason}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Button title="Add" onPress={addExpense} />
      </View>

      {/* Today’s Expenses */}
      <Text style={styles.sectionTitle}>📅 Today</Text>
      {todayExpenses.length > 0 ? (
        <FlatList
          data={todayExpenses}
          keyExtractor={(item) => item.id}
          renderItem={renderExpense}
        />
      ) : (
        <Text style={styles.noData}>No expenses today</Text>
      )}

      {/* Yesterday’s Expenses */}
      <Text style={styles.sectionTitle}>📅 Yesterday</Text>
      {yesterdayExpenses.length > 0 ? (
        <FlatList
          data={yesterdayExpenses}
          keyExtractor={(item) => item.id}
          renderItem={renderExpense}
        />
      ) : (
        <Text style={styles.noData}>No expenses yesterday</Text>
      )}

      {/* Total */}
      <Text style={styles.total}>Total: ₹{getTotal()}</Text>
    </View>
  );
};

export default ExpenseTracker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
  },
  expenseItem: {
    fontSize: 16,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  noData: {
    fontSize: 14,
    fontStyle: "italic",
    color: "gray",
  },
  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
    color: "#009688",
  },
});
