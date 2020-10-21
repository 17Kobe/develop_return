<template>
  <div class="hello">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "HelloWorld",
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>加密連線使用者介面研發 (銘泰)<br><br>\
此研發目的在建立SD-WAN Gateway兩端加密IPSec通道的介面，並且只要把每個SD-WAN Gateway及其下的網段遮罩輸入即可，系統即會自動\
建立所有端點間的加密通道，所以只需要告知點而不需要告知線的方式來更簡易的去建立。另外是會將我們所使用的認證方式(SH1-HMAC)及加密方式(AES-256-CBC)標示在介面上，雖然不用輸入但讓使用者能了解認證及加密內容。最後待所有加密通道都建立完成後，還可以至拓樸管理頁面以圖形化來看到哪些SD-WAN\
Gateway間是否已建立好加密通道，及方便滑鼠移至加密通道上再進一步看到詳細的起迄點及加密通道資訊。<br><span style="background-color:red; font-color:red">welcome you </span>',
      editorConfig: {
        // The configuration of the editor.
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
