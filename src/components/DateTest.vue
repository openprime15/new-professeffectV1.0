<template>
  <v-row>
    <v-col cols="12" sm="6" md="4">
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="selectDate"
            label="날짜를 선택해주세요"
            prepend-icon="event"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" :allowed-dates="allowedDates" no-title scrollable range>
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "DateTest",
  data() {
    return {
      date: [new Date().toISOString().substr(0, 10)],
      menu: false,
      today: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    allowedDates(val) {
      return this.date[1] ? val >= this.today : val >= this.date[0];
    }
  },
  computed: {
    selectDate() {
      return this.date.join("~");
    }
  }
};
</script>

<style>
</style>