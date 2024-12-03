'use client';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
    return (
        <div className="relative max-w-[1440px] mx-auto xl:px-25 md:px-15 sm:px-4 px-12">
            {children}
        </div>
    );
}

export default Container;