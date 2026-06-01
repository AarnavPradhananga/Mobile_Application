import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';

const C = { blue: '#4F8EF7', green: '#34C97A', red: '#FF5A5A', bg: '#F4F6FB', card: '#FFF', text: '#1A1D2E', muted: '#8A8FAA' };

const StatCard = ({ icon, value, label, color }) => (
  <View style={[s.card, { backgroundColor: color }]}>
    <Icon name={icon} size={28} color="#fff" style={{ marginBottom: 8 }} />
    <Text style={s.cVal}>{value}</Text>
    <Text style={s.cLbl}>{label}</Text>
  </View>
);

const Row = ({ icon, title, sub, right, rightColor }) => (
  <View style={s.row}>
    <View style={s.iconBox}>
      <Icon name={icon} size={18} color={C.muted} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={s.rowTitle}>{title}</Text>
      {sub ? <Text style={s.rowSub}>{sub}</Text> : null}
    </View>
    <Text style={[s.rowRight, { color: rightColor || C.text }]}>{right}</Text>
  </View>
);

const TABS = [
  { key: 'home',   label: 'Home',   icon: 'home',          iconActive: 'home' },
  { key: 'study',  label: 'Study',  icon: 'book-outline',  iconActive: 'book' },
  { key: 'budget', label: 'Budget', icon: 'wallet-outline', iconActive: 'wallet' },
  { key: 'status', label: 'Status', icon: 'bar-chart-outline', iconActive: 'bar-chart' },
];

export default function App() {
  const [active, setActive] = useState('home');

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll}>
        <Text style={s.appName}>StudentSathi</Text>
        <Text style={s.greeting}>Good Morning, Aarnav 👋</Text>
        <Text style={s.sub}>Your snapshot for this month</Text>

        <View style={s.cardRow}>
          <StatCard icon="timer-outline"  value="42h 30m"  label="Total Studied" color={C.blue} />
          <StatCard icon="cash-outline"   value="Rs 3,840" label="Total Spent"   color={C.green} />
        </View>

        <Text style={s.secTitle}>Top Expenses</Text>
        <View style={s.box}>
          <Row icon="book-outline"     title="Books & Notes" sub="#1 this month" right="Rs 1,200" />
          <Row icon="fast-food-outline" title="Food & Snacks" sub="#2 this month" right="Rs 950" />
          <Row icon="bus-outline"      title="Transport"     sub="#3 this month" right="Rs 690" />
        </View>

        <Text style={s.secTitle}>Recent Transactions</Text>
        <View style={s.box}>
          <Row icon="book-outline"       title="Calculus textbook"  sub="May 28" right="-Rs 650"   rightColor={C.red} />
          <Row icon="fast-food-outline"  title="Lunch at canteen"   sub="May 27" right="-Rs 120"   rightColor={C.red} />
          <Row icon="bus-outline"        title="Bus pass top-up"    sub="May 26" right="-Rs 300"   rightColor={C.red} />
          <Row icon="school-outline"     title="Scholarship credit" sub="May 25" right="+Rs 2,000" rightColor={C.green} />
          <Row icon="print-outline"      title="Printed notes"      sub="May 24" right="-Rs 85"    rightColor={C.red} />
        </View>
      </ScrollView>

      <View style={s.tabBar}>
        {TABS.map(({ key, label, icon, iconActive }) => {
          const on = active === key;
          return (
            <TouchableOpacity key={key} style={s.tabItem} onPress={() => setActive(key)} activeOpacity={0.7}>
              <Icon name={on ? iconActive : icon} size={22} color={on ? C.blue : C.muted} />
              <Text style={[s.tabLabel, on && { color: C.blue }]}>{label}</Text>
              {on && <View style={s.tabDot} />}
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:     { flex: 1, backgroundColor: C.bg },
  scroll:   { padding: 20, paddingBottom: 30 },

  appName:  { fontSize: 12, fontWeight: '700', color: C.blue, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  greeting: { fontSize: 24, fontWeight: '800', color: C.text, marginBottom: 4 },
  sub:      { fontSize: 13, color: C.muted, marginBottom: 20 },
  secTitle: { fontSize: 13, fontWeight: '700', color: C.muted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, marginTop: 12 },

  cardRow:  { flexDirection: 'row', gap: 12, marginBottom: 4 },
  card:     { flex: 1, borderRadius: 16, padding: 16 },
  cVal:     { fontSize: 18, fontWeight: '800', color: '#fff', marginBottom: 2 },
  cLbl:     { fontSize: 11, color: 'rgba(255,255,255,0.8)', fontWeight: '600' },

  box:      { backgroundColor: C.card, borderRadius: 16, padding: 16, marginBottom: 4 },
  row:      { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: '#F0F2F8' },
  iconBox:  { width: 38, height: 38, borderRadius: 10, backgroundColor: C.bg, alignItems: 'center', justifyContent: 'center' },
  rowTitle: { fontSize: 13, fontWeight: '600', color: C.text },
  rowSub:   { fontSize: 11, color: C.muted, marginTop: 2 },
  rowRight: { fontSize: 13, fontWeight: '700' },

  tabBar:   { flexDirection: 'row', backgroundColor: C.card, borderTopWidth: 1, borderTopColor: '#EEF0F8', paddingVertical: 8 },
  tabItem:  { flex: 1, alignItems: 'center', gap: 2 },
  tabLabel: { fontSize: 11, color: C.muted, fontWeight: '600' },
  tabDot:   { width: 4, height: 4, borderRadius: 2, backgroundColor: C.blue, marginTop: 1 },
});