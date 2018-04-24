import axios from 'axios';

class CategoryApi {

    static getAllCategories() {
        return new Promise((resolve, reject) => {
            axios.get('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Types_of_insurance&cmtype=subcat&format=json&origin=*')
            .then((response) => {
                resolve(Object.assign([],  response.data.query.categorymembers));
            })
            .catch((error) => {
                reject(error);
            });
        });
      }
}

export default CategoryApi;