

const Filter = () => {
    type Details = {
        Name: string,
        CGPA: number
    }

    let User: Details[] = [
        {
            Name: "Ranjeet",
            CGPA: 9.03
        },
        {
            Name: "Sagar",
            CGPA: 8.7
        },
        {
            Name: "Vivek",
            CGPA: 6.7
        }
    ]
    return (
        <>
            <div className="relative group">
                <div className="">USER DETAIL</div>
                <div className="absolute hidden group-hover:block">
                    {
                        User.filter(item => item.CGPA > 7).map(item => (
                            <div className=" m-4 border-3 border-red-500 p-4 bg-red-200"  >
                                <ul>
                                    <li><strong>Name:</strong>{item.Name}</li>
                                    <li><strong>CGPA:</strong>{item.CGPA}</li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>


        </>
    )
}
export default Filter;