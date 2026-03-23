export const loadLeaves = () => {
    const data = localStorage.getItem('leaves');
    return data ? JSON.parse(data) : [];
};

export const saveLeaves = (leaves) => {
    localStorage.setItem('leaves', JSON.stringify(leaves));
};
