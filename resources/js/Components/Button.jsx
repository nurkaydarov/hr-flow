import {Link} from "@inertiajs/react";

const Button = ({name, routeName}) => {
    return (
        <Link href={route(`${routeName}`)} id="createProductButton"  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              type="button" data-drawer-target="drawer-create-product-default"
              data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default"
              data-drawer-placement="right">
            {name}
        </Link>
    )
}

export default Button;
