<template>
    <div class="bg-gray content pt-5 px-2">
      <div class="list">

        <div class="list-logo">
          <img src="/images/logo.svg" alt="logo list"/>
          <p>Hello "{{payload && payload.name}}" 😜</p>
        </div>

        <div class="list-form">
          <Form :onSuccess="onAddSuccess"/>
        </div>

        <ContentLoading v-if="isLoading" :count="5"/>
        <template v-else>
          <div class="list-scroll">
            <div class="list-item" v-for="note in notes" :key="note.id">
              <a-checkbox class="check-note">
                {{note.title}}
              </a-checkbox>
              <a-button type="danger" size="small" @click="onDeleteNote(note.id)">
                  <b-icon icon="trash" class="plus-icon"></b-icon>
              </a-button>
            </div>
          </div>

          <div class="list-paginate">
            <a-pagination 
              :default-current="pagination.page" 
              :total="pagination.total" 
              :defaultPageSize="pagination.per_page"
              @change="onChangePage"
            />
          </div>
        </template>

      </div>
    </div>
</template>

<script>
import './home.scss';
import { mapState } from "vuex";
import Form from './Form';
import ContentLoading from '@components/commons/ContentLoading';
import { NoteRepository } from '@repositories';
const noteRepository = new NoteRepository();

export default {
  name: 'home-cmp',
  components: {
    Form,
    ContentLoading
  },
  mounted(){
    let { query: { page = 1 } } = this.$route;
    this.getListNotes(page);
  },
  methods: {
    /* Get list notes base on page */
    getListNotes: function(page){
      this.isLoading = true;
      noteRepository.getList({ page: page })
      .then(res => {
        let { data } = res;
        this.notes = data.data;
        this.pagination = {
          total : data.total,
          per_page : data.per_page,
          page : data.current_page,
        }
        this.isLoading = false;
      })
      .catch(err => {
        this.isLoading = false;
      });
    },

    /* Callback when create note success */
    onAddSuccess: function(){
      this.$message.success('Create note success!', 3);
      this.getListNotes(this.pagination.page);
    },

    /* Method when change page */
    onChangePage: function(page){
      this.$router.push({ path: '/', query: { page: page }})
    },

    /* Delete note when click btn */
    onDeleteNote: function(id){
      noteRepository.deleteNote(id)
      .then(res => {
          this.$message.success(res.data, 3);
          this.getListNotes(this.pagination.page);
      });
    }
  },
  computed: {
    ...mapState("auth", ["payload"]),
  },
  data(){
    return {
      isLoading: true,
      notes: [],
      pagination: {}
    }
  },
  watch: {
    /* Listen change of url */
    $route(to) {
      let { query: { page = 1 } } = to;
      this.getListNotes(page);
    }
  }
}
</script>