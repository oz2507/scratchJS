<template>
  <v-card>
    <v-card-title>お問い合わせ</v-card-title>
    <v-form>
      <v-card-text>
        <v-text-field
          v-model="text1"
          label="入力必須で文字数制限のあり"
          :rules="[rules.required, rules.limit_length]"
        >
        </v-text-field>
        <v-text-field
          v-model="text2"
          label="入力必須のみあり"
          :rules="[rules.required]"
        >
        </v-text-field>
        <v-textarea
          v-model="text3"
          label="制約なし"
        >
        </v-textarea>
        <v-row>
          <v-col cols="4">
            <v-checkbox
              v-model="checkbox1"
              label="red"
              color="red">
            </v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="checkbox2"
              label="blue"
              color="blue">
            </v-checkbox>
          </v-col>
          <v-col cols="4">
            <v-checkbox
              v-model="checkbox3"
              label="green"
              color="green">
            </v-checkbox>
          </v-col>
        </v-row>

      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="primary">送信する</v-btn>
        <span v-if="success">送信成功！</span>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      form: {
        text1: '',
        text2: '',
        text3: '',
        success: false,
      },
      rules: {
        required: value => !!value || '必須項目です',
        limit_length: value => (value && value.length <= 10) || "10文字以内で入力してください"
      },
    }
  },
}
</script>