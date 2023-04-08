export function logout(userid) {
    return new Promise((resolve) => 
        setTimeout(() => resolve({data: userid}), 2000)
    );
}