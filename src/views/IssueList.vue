<template>
    <div>
        <h1>issueリスト</h1>
        <el-button type="success" @click="getIssues()">issue取得</el-button>
            <el-row :gutter="12">
                <el-col :span="12"  v-for="( issue, index ) in issues" :key="issue.id">
                <el-card class="box-card" shadow="hover" style="margin: 5px 0;">
                  <el-row :gutter="12">
                    <el-col :span="21">{{ issue.title }}</el-col>
                    <el-col :span="3">
                      <!-- コード2 @click="closeIssue(index)"を追加 -->
                      <el-button @click="closeIssue(index)" type="success" icon="el-icon-check" circle></el-button>
                    </el-col>
                  </el-row>
                </el-card>
              </el-col>
            </el-row>
    </div>
</template>

<script>
import axios from 'axios'; // --1

// エンドポイントのベースとリクエストヘッダーをまとめてオブジェクト化して定数に代入
const client = axios.create({
    baseURL: `${process.env.VUE_APP_GITHUB_ENDPOINT}`, 
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type':'application/json',
        'Authorization': `token ${process.env.VUE_APP_GITHUB_TOKEN}`
    },
})

export default {
  name: 'IssueList',
  // 以下を追加
  data() {
    return {
        issues: []
    }
  },
  // 以下を追加
  methods: {
    getIssues() {
        // client定数からget()を呼び出し
        client.get('/issues').then((res) => {
            this.issues = res.data;
        })
    },
    closeIssue(index){
      const target = this.issues[index] // --3
      client.patch(`/issues/${target.number}`, // --4
          {
            state: 'closed' // --5
          },
        )
        .then(() => {
          this.issues.splice(index, 1) // --6
      })
    },
  },
  // 以下を追加
  created() {
    this.getIssues();
  }
}
</script>