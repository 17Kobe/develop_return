<template>
  <div>
    <center>
      <div
        class="ckeditor_width"
        style=" border-style: groove; border-width: 1px;"
      >
        <!-- ckeditor 會產生兩個平行的 div，所以用flex會變並排 -->
        <ckeditor
          :editor="editor"
          v-model="editorData"
          :config="editorConfig"
          @ready="onReady"
        ></ckeditor>
      </div>
      <div>
        目前字數：
        <span :class="[{ red_word: word_count < 300 }]">{{ word_count }} </span
        ><br />
        <span> (目標字數 300~500。<u>紅字就是要換字</u>) </span><br /><br />
      </div>

      <div class="ckeditor_width" style="text-align:left;">※ 說明<span class="b">研發目的</span>、<span class="b">研發技術內容</span>、系統/功能開發之<span class="b">發展過程</span>、開發或設計新服務/產品之<span class="b">服務流程</span></div>
      <div class="ckeditor_width" style="text-align:left;">※ 強調研發技術/服務之<span class="b">必要性</span>、<span class="b">關鍵性</span>、<span class="b">創新性</span>；能克服什麼困難、建立何種新技術、可領導國市場、或具國際競爭力(呼應通傳會研發計畫審查的七項指標與三項認定原則)</div>
      <div class="ckeditor_width" style="text-align:left;">※ 標明達成的論文、著作權、專利，或成果展示，<span class="b">避免研發過程的細部解說</span> (如程式碼)</div>
      <div class="ckeditor_width" style="text-align:left;">※ <span class="b">避免不應出現用字</span>、用詞 (包括整合、加值、應用、擴充、評估、試作、分析、規劃、研習、研討、實用化、經營模式、演進、協助、維護、維運、管理、網頁、市場、市調、市場調查、成本、撰寫、配合、支援、改良、提昇、昇版、升級、衍生、生產、量產、產製、技術支援、行銷、行政作業、管理作業、審標、策略、設備擴充、更新、客制化、廣告、客戶、推廣、諮詢、產品服務、技術服務、品質改善、品保、CMMI作業、樣測、驗收、教育訓練等)</div>
        </center>
  </div>
</template>

<script>
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import "@ckeditor/ckeditor5-build-decoupled-document/build/translations/zh";
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: "HelloWorld",
  data() {
    return {
      illegal_word: [
        "配合",
        "整合",
        "加值",
        "應用",
        "擴充",
        "評估",
        "試作",
        "分析",
        "規劃",
        "研習",
        "研討",
        "實用化",
        "經營模式",
        "演進",
        "協助",
        "維護",
        "維運",
        "管理",
        "網頁",
        "市場調查",
        "市場",
        "市調",
        "成本",
        "撰寫",
        "支援",
        "改良",
        "提昇",
        "提升",
        "昇版",
        "升級",
        "衍生",
        "生產",
        "量產",
        "產製",
        // "技術支援",
        "行銷",
        "行政作業",
        "管理作業",
        "審標",
        "策略",
        // "設備擴充",
        "更新",
        "客制化",
        "廣告",
        "客戶",
        "推廣",
        "諮詢",
        "產品服務",
        "技術服務",
        "品質改善",
        "品保",
        "CMMI作業",
        "樣測",
        "驗收",
        "教育訓練",
        "功能加強",
        "功能提昇",
        "功能新增",
        "客戶面",
        "市場面",
        "ADSL",
        "MOD",
        "1288",
        "委託案",
        "研擬",
        "規格",
        "草案",
        "採購",
        "展示",
        "會議",
        "LDAP",
        "提案",
        "研究所",
        "銷售",
        "合作"
      ],
      word_count: 0,
      editor: DecoupledEditor,
      editorData: "",
      //         '<p>加密連線使用者介面研發 (銘泰)<br><br>\
      // 此研發目的在建立SD-WAN Gateway兩端加密IPSec通道的介面，並且只要把每個SD-WAN Gateway及其下的網段遮罩輸入即可，系統即會自動\
      // 建立所有端點間的加密通道，所以只需要告知點而不需要告知線的方式來更簡易的去建立。另外是會將我們所使用的認證方式(SH1-HMAC)及加密方式(AES-256-CBC)標示在介面上，雖然不用輸入但讓使用者能了解認證及加密內容。最後待所有加密通道都建立完成後，還可以至拓樸管理頁面以圖形化來看到哪些SD-WAN\
      // Gateway間是否已建立好加密通道，及方便滑鼠移至整合加密通道上再進一步看到詳細的起迄點及加密通道資訊。<br><span style="background-color:red">welcome you </span>',
      editorConfig: {
        language: "zh"
        // The configuration of the editor.
      }
    };
  },
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    }
  },
  watch: {
    editorData(val) {
      // console.log(this.illegal_word.join("|"));
      var clean_html_str = val
        .replaceAll(/<[^>]*>/g, "")
        .replaceAll("&nbsp;", "")
        .replaceAll("&amp;", "&")
        .replaceAll("&lt;", "<")
        .replaceAll("&gt;", ">")
        .replaceAll(/\s/g, "");
      // console.log(clean_html_str)

      this.word_count = clean_html_str.length;
      // str_message = str_message.replace(/(Switch of |Port of |utilization of )([^\s]*)/g, "$1<b>$2</b>");

      // Ex:
      // 234234整合32整合
      // <p>整合</p>
      // <white;">整合</span>整合
      // 整合</p>

      var tmp_val = val;
      // 以上要不找出">整合 喔 [^<][^/][^u]
      var replace = '([^u]>|[^>])(' + this.illegal_word.join("|") + ")";
      console.log(replace);
      
      var re = new RegExp(replace, "g");
      var found = val.match(re);
      if (found) {
        console.log("1");
        tmp_val = val.replace(
          re,
          '$1<span style="background-color:red;color:white"><u>$2</u></span>'
        );
        this.editorData = tmp_val;
      }
      // console.log(this.editorData);

      replace = '(<u>)(' + this.illegal_word.join("|") + ")([^<]+)(</u></span>)";
      re = new RegExp(replace, "g");
      found = tmp_val.match(re);
      if (found) {
        console.log("2");

        this.editorData = tmp_val.replace(re, "$1$2$4$3");
        console.log(this.editorData);
      }
    }
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

.red_word {
  color: red;
}

.b {
  color: blue;
}


@media (min-width: 1200px) {
  .ckeditor_width {
    width: 970px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .ckeditor_width {
    width: 720px;
  }
}
</style>
