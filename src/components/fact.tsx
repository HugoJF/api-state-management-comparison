import {ReactNode} from "react";
import clsx from "clsx";
import {Loader} from "./loader";

type Props = {
    onReload?: () => void;
    loading?: boolean;
    children: ReactNode;
}

export function Fact({onReload, loading = false, children}: Props) {
    return <p
        onDoubleClick={onReload}
        className={clsx('duration-150 relative px-8 py-6 bg-gray-800 text-xl rounded-lg shadow-lg select-none cursor-pointer', {
            'text-gray-50': !loading,
            'text-gray-600': loading,
        })}
    >
        {loading && <div className="absolute inset-0 flex justify-center items-center">
            <Loader/>
        </div>}
        {children}
    </p>
}
