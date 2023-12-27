export default class TodoAPI {
  
  //POST//
  async createTodo() {
    const RequestBody = {
      title: 'Todo List',
      order: 1, 
    }
    const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'apikey': 'KDT7_GrZ1eYBo', 
        'username': 'KDT7_ChoiHongJoo'
      },
      body: JSON.stringify(requestBody),
    })
    const json = await res.json()
    console.log(json)

    return json
  }
  
  
  //GET//
  interface Todo {
    id: string;
    order: number;
    title: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  type ResponseValue = Todo[];
  class TodoAPI {
    async getTodos() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo', 
          'username': 'KDT7_ChoiHongJoo'
        },
  
      })
      const json = await res.json()
      console.log(json)
  
      return json as ResponseValue;
    }
  }
}

  //PUT//
  interface Todo {
    id: string;
    order: number;
    title: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  type ResponseValue = Todo[];
  
  interface RequestBody {
    title: string;
    done: boolean;
    order: number;
  }
  
  class TodoAPI {
    async getTodos() {
      const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/:todoId', {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'apikey': 'KDT7_GrZ1eYBo', 
          'username': 'KDT7_ChoiHongJoo'
        },
        body: JSON.stringify(requestBody),
      });

      const json = await res.json()
      console.log(json)
  
      return json as ResponseValue;
    }
  }
}