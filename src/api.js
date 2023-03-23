import axios from "axios";

const BASE_URL = "http://127.0.0.1:7777/api/v1";

// 리소스 접근 허용
axios.defaults.headers["Access-Control-Allow-Origin"] = "*";

const handleAxiosError = (error) => {
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    console.log("########## Server Error ##########");
  } else {
    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    console.log(`########## ${error.message} ##########`);
  }
};

const api = {
  getBookByBookId: async (bookId) => {
    const res = await axios
      .get(`${BASE_URL}/get/book/book_id?book_id=${bookId}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  getBooksByNation: async (nation) => {
    const res = await axios
      .get(`${BASE_URL}/get/book/nation?nation=${nation}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  getBooksByGenre: async (genre) => {
    const res = await axios
      .get(`${BASE_URL}/get/book/genre?genre=${genre}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  getBooksByNationAndGenre: async (nation, genre) => {
    const res = await axios
      .get(`${BASE_URL}/get/book/nation+genre?nation=${nation}&genre=${genre}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  getRecent10Books: async () => {
    const res = await axios.get(`${BASE_URL}/get/book/recent`).catch(handleAxiosError);
    return res?.data;
  },

  getAllBooks: async () => {
    const res = await axios.get(`${BASE_URL}/get/book/all`).catch(handleAxiosError);
    return res?.data;
  },

  searchBookByTitle: async (title) => {
    const res = await axios
      .get(`${BASE_URL}/search/book/title?title=${title}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  searchBookByCategory: async (category) => {
    const res = await axios
      .get(`${BASE_URL}/search/book/category?category=${category}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  searchBookLessThanPrice: async (price) => {
    const res = await axios
      .get(`${BASE_URL}/search/book/price/less?price=${price}`)
      .catch(handleAxiosError);
    return res?.data;
  },

  insertBook: async (body) => {
    axios
      .post(`${BASE_URL}/insert/book`, body, {
        headers: { "Content-Type": `application/json` },
      })
      .catch(handleAxiosError);
  },

  updateBook: async (bookId, body) => {
    axios
      .put(`${BASE_URL}/update/book/${bookId}`, body, {
        headers: { "Content-Type": `application/json` },
      })
      .catch(handleAxiosError);
  },

  deleteBook: async (bookId) => {
    axios.delete(`${BASE_URL}/delete/book/${bookId}`).catch(handleAxiosError);
  },
};

export default api;
