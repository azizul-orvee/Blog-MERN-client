import requests from './httpService';

class PostService {
  addJob(body) {
    return requests.post(`/`, body);
  }

  getAllPosts() {
    return requests.get('/');
  }

  getTenPosts () {
    return requests.get('/tenPosts')
  }
  getPostById (id) {
    return requests.get(`/${id}`)
  }
  deleteJobById (id) {
    return requests.delete(`/${id}`)
  }

//   getJobByID(id) {
//     return requests.get(`/job_update/${id}`);
//   }

//   deleteJobByID(id) {
//     return requests.delete(`/job_update/${id}`);
//   }

//   updateJob(id, body) {
//     return requests.put(`/job_update/${id}/`, body);
//   }
}

export default new PostService();