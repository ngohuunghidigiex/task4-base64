import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { EButtonType, ButtonSize, IconPossiton, ETheme } from '@/enum';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'hover' | 'clicked' | 'disabled' | 'processing';
    iconPosition?: 'left' | 'right' | 'none';
    icon?: React.ReactNode;
    theme?: ETheme;
}

export const ButtonCustom: React.FC<ButtonProps> = ({
    className,
    children,
    variant = EButtonType.Default,
    iconPosition = IconPossiton.None,
    size,
    theme,
    icon,
    ...props
}) => {
    const buttonClasses = cn(
        'flex items-center justify-center rounded-lg',

        theme === ETheme.Light && {
            'bg-Primary-light-default text-black': variant === EButtonType.Default,
            'bg-Primary-light-hover text-black': variant === EButtonType.Hover,
            'bg-Primary-light-clicked text-black': variant === EButtonType.Clicked,
            'bg-Primary-light-disabled text-gray-400 cursor-not-allowed': variant === EButtonType.Disabled,
            'bg-Primary-light-processing text-gray-400 cursor-wait': variant === EButtonType.Processing,
        },
        theme === ETheme.Dark && {
            'bg-Primary-dark-default text-white': variant === EButtonType.Default,
            'bg-Primary-dark-hover text-black': variant === EButtonType.Hover,
            'bg-Primary-dark-clicked text-white': variant === EButtonType.Clicked,
            'bg-Primary-dark-disabled text-gray-400 cursor-not-allowed': variant === EButtonType.Disabled,
            'bg-Primary-dark-processing text-gray-400 cursor-wait': variant === EButtonType.Processing,
        },
        theme === ETheme.Text && {
            'bg-Text text-black': variant === EButtonType.Default,
            'bg-Text text-Primary-dark-hover': variant === EButtonType.Hover,
            'bg-Text text-Primary-dark-clicked': variant === EButtonType.Clicked,
            'bg-Text text-Primary-dark-disabled cursor-not-allowed': variant === EButtonType.Disabled,
            'bg-Text text-Primary-dark-processing cursor-wait': variant === EButtonType.Processing,
        },
        {
            'py-1 px-2': size === ButtonSize.Small,
            'py-2 px-4': size === ButtonSize.Medium,
            'py-3 px-6': size === ButtonSize.Large,
        },
        className,
    );

    return (
        <button className={buttonClasses} disabled={variant === 'disabled' || variant === 'processing'} {...props}>
            {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
            {icon && iconPosition === 'none' && <span className="m-auto">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    );
};
