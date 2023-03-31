type SitterType = {
    id: string;
    name: string,
    dateofbirth: string,
    description: string,
    weekdays?: boolean,
    weekends?: boolean,
    image: string,
    booking: string[],
}

export default SitterType;