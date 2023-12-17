import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const OrderList = ({orders}) => {
  
    const TABLE_HEAD = ['Sr.no',"","Date", "Price", "Order Status", ];
    console.log(orders)
    const TABLE_ROWS = [
        {
          name: "John Michael",
          job: "Manager",
          date: "23/04/18",
        },
        {
          name: "Alexa Liras",
          job: "Developer",
          date: "23/04/18",
        },
        {
          name: "Laurent Perrier",
          job: "Executive",
          date: "19/09/17",
        },
        {
          name: "Michael Levi",
          job: "Developer",
          date: "24/12/08",
        },
        {
          name: "Richard Gran",
          job: "Manager",
          date: "04/10/21",
        },
      ];

return(
        <div className='lg:px-8 px-2 py-6 lg:py-12 min-h-[100vh] ' >
         <Card className="overflow-scroll h-full w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        {orders && orders?.map(({ id,totalPrice,orderStatus,name,   }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={index}>
             
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                  {(index+1)}.
                  </Typography>
                </td>
                <Link to={`/orderDetails/${id}`} >
                <td className={classes}>
                  <Typography as="a" href="#" variant="small" color="blue" className="font-medium">
                    View
                  </Typography>
                </td>
                </Link>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {name}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    Rs. {totalPrice}
                  </Typography>
                </td>
                
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {orderStatus}
                  </Typography>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    </div>
  )
}

export default OrderList