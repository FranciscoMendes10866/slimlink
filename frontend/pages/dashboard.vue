<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-8">
            <template>
              <div class="center">
                <div class="level">
                  <div class="level-item has-text-centered">
                    <div>
                      <vs-button size="large" class="reset mb-4" dark shadow>
                        Create&nbsp;<i class="bx bxs-message-square-add"></i
                      ></vs-button>
                    </div>
                  </div>
                  <div class="level-item has-text-centered">
                    <div>
                      <vs-button size="large" class="reset mb-4" dark shadow>
                        Log out&nbsp;<i class="bx bx-log-out"></i
                      ></vs-button>
                    </div>
                  </div>
                </div>
                <vs-table class="reset" striped>
                  <template #thead>
                    <vs-tr>
                      <vs-th> Link </vs-th>
                      <vs-th> Slug </vs-th>
                      <vs-th> Edit </vs-th>
                      <vs-th> Delete </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      v-for="(tr, i) in $vs.getPage(users, page, max)"
                      :key="i"
                      :data="tr"
                    >
                      <vs-td>
                        {{ tr.name }}
                      </vs-td>
                      <vs-td>
                        {{ tr.email }}
                      </vs-td>
                      <vs-td>
                        <vs-button class="reset" icon warn flat>
                          <i class="bx bxs-pencil"></i>
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button class="reset" icon danger flat>
                          <i class="bx bx-trash"></i>
                        </vs-button>
                      </vs-td>
                    </vs-tr>
                  </template>
                  <template #footer>
                    <vs-pagination
                      v-model="page"
                      :length="$vs.getLength(users, max)"
                    />
                  </template>
                </vs-table>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    page: 1,
    max: 4,
    users: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        website: 'hildegard.org',
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        website: 'anastasia.net',
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        website: 'ramiro.info',
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        website: 'kale.biz',
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        website: 'demarco.info',
      },
    ],
  }),
})
</script>

<style scoped>
.reset {
  margin: auto;
}
</style>
