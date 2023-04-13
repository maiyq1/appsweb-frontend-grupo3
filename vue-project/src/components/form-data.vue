<template>

  <div class="card">
    <Panel header="Add Tutorial">


      <div class="card flex justify-content-center">
        <p>{{$t('code')}}</p>
        <InputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999" />
        <Button label="validate"  icon="pi pi-check"/>
      </div>


      <div class="card flex justify-content-center">
        <p>{{$t('name')}}</p>
        <span class="p-float-label">
            <AutoComplete v-model="value" inputId="ac" :suggestions="items" @complete="search" />
            <label for="ac">Product Name</label>
            </span>
      </div>


      <div class="card flex justify-content-center">
        <p>{{$t('category')}}</p>
        <div class="p-float-label">
          <Dropdown v-model="selectedCity" inputId="dd-city" :options="cities" optionLabel="name" placeholder="Select a Category" class="w-full md:w-14rem" />
          <label for="dd-city">Select Category</label>
        </div>
      </div>


      <div class="card flex justify-content-center">
        <p>{{$t('dateAdded')}}</p>
        <span class="p-float-label">
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input"></label>
        </span>
      </div>


      <div class="card flex justify-content-center">
        <p>{{$t('quantity')}}</p>
        <span class="p-float-label">
            <InputNumber id="number-input" v-model="value" />
            <label for="number-input"></label>
        </span>
      </div>

      <div class="card flex justify-content-center">
        <p>{{$t('description')}}</p>
        <span class="p-float-label">
            <Textarea v-model="value" rows="5" cols="30" />
            <label></label>
        </span>
      </div>



      <div class="card flex flex-column align-items-center gap-3">
        <p>{{$t('digitalVersion')}}</p>
        <TriStateCheckbox v-model="value" />
        <label for="checkbox">{{ value == null ? 'null' : value }}</label>
      </div>





      <div class="card flex justify-content-center">
        <p>{{$t('status')}}</p>

        <div v-for="category in categories" :key="category.key" class="flex align-items-center">
          <RadioButton v-model="selectedCategory" :inputId="category.key" name="Active" :value="category.name" />
          <label :for="category.key" class="ml-2">{{ category.name }}</label>
        </div>

      </div>

      <div class="card flex justify-content-center flex-wrap gap-3">
        <p>{{button}}</p>
        <Button label="Save" />
        <Button label="Cancel" severity="danger" />
      </div>
    </Panel>

  </div>


</template>

<script>
export default {
  data(){
    return{
      code:"Code: ",
      name:"Name: ",
      category:"Category: ",
      dateAdded:" Date Added :",
      quantity: " Quantity: ",
      description:"Description: ",
      digitalVersion:"",
      button:"",
      status:"Status:"

    }
  }
}



</script>

<style scoped>
.card{
  display: flex;
  grid-column: span 3;
  gap:20px;
  align-items: center;
  padding: 10px;
}



</style>

<script setup>
import { ref } from 'vue';
///const value = ref(null);

const cities = ref([
  { name: 'Category 1', code: 'c1' },
  { name: 'Category 2', code: 'c2' },
  { name: 'Category 3', code: 'c3' },
  { name: 'Category 4', code: 'c4' },
  { name: 'Category 5', code: 'c5' }
]);

const categories = ref([
  { name: 'Active', key: 'A' },
  { name: 'Suspended', key: 'S' },
  { name: 'Inactive', key: 'I' },
]);
const selectedCategory = ref('Active');
</script>
