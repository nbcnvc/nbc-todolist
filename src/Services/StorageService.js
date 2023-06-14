export const getTodosFromLS = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const saveTodosToLS = (key, todos) => {
  try {
    localStorage.setItem(key, JSON.stringify(todos));
  } catch {
    alert("투두리스트를 저장하던 중 오류가 발생했습니다.");
  }
};
