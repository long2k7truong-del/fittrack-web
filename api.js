// Đường dẫn gốc kết nối đến MockAPI của bạn
const API_URL = "https://6a3a7bba917c7b14c74d967e.mockapi.io/workouts";

// 1. Hàm lấy danh sách tất cả các buổi tập (GET)
function getWorkouts() {
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error("Không thể tải dữ liệu từ API");
            return response.json();
        });
}

// 2. Hàm thêm mới một buổi tập (POST)
function createWorkout(workoutData) {
    return fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(workoutData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Không thể thêm mới buổi tập");
        return response.json();
    });
}

// 3. Hàm xóa một buổi tập theo ID (DELETE)
function deleteWorkout(id) {
    return fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error("Không thể xóa buổi tập này");
        return response.json();
    });
}
// 4. Hàm cập nhật dữ liệu buổi tập (PUT)
function updateWorkout(id, updatedData) {
    return fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedData)
    })
    .then(response => {
        if (!response.ok) throw new Error("Không thể cập nhật buổi tập");
        return response.json();
    });
}