'use client';
import { ButtonCustom } from '@/app/Button/ButtonCustom';
import { Loading, PlusIcon } from '@/assets/icons';
import { EButtonType, ButtonSize, IconPossiton, ETheme } from '@/enum';

const types = [
    {
        name: 'Primary White',
        size: ButtonSize.Large,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Light,
    },
    {
        name: 'Primary White',
        size: ButtonSize.Medium,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Light,
    },
    {
        name: 'Primary White',
        size: ButtonSize.Small,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Light,
    },
    {
        name: 'Primary Dark',
        size: ButtonSize.Large,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Dark,
    },
    {
        name: 'Primary Dark',
        size: ButtonSize.Medium,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Dark,
    },
    {
        name: 'Primary Dark',
        size: ButtonSize.Small,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Dark,
    },
    {
        name: 'Text Dark',
        size: ButtonSize.Large,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Text,
    },
    {
        name: 'Text Dark',
        size: ButtonSize.Medium,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Text,
    },
    {
        name: 'Text Dark',
        size: ButtonSize.Small,
        variant: [
            EButtonType.Default,
            EButtonType.Hover,
            EButtonType.Clicked,
            EButtonType.Disabled,
            EButtonType.Processing,
        ],
        theme: ETheme.Text,
    },
];

export const ButtonGroup = () => {
    return (
        <div>
            {types.map((type, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white"
                >
                    <h1 className="text-4xl font-bold my-10">{`${type.name} ${type.size}`}</h1>
                    <div className="space-y-4">
                        <div className="grid grid-cols-5 gap-2">
                            <div className="flex flex-col justify-around space-y-4">
                                {type.variant.map((variant, index) => (
                                    <span key={index} className="text-center">
                                        {variant}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-4 items-center justify-center">
                                {type.variant.map((variant, index) => (
                                    <ButtonCustom key={index} theme={type.theme} size={type.size} variant={variant}>
                                        Button Text
                                    </ButtonCustom>
                                ))}
                            </div>

                            <div className="flex flex-col space-y-4">
                                {type.variant.map((variant, index) => {
                                    if (variant === EButtonType.Processing) {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                iconPosition={IconPossiton.Left}
                                                variant={variant}
                                                icon={<Loading className="animate-spin" />}
                                            >
                                                Button Text
                                            </ButtonCustom>
                                        );
                                    } else {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                variant={variant}
                                                iconPosition={IconPossiton.Left}
                                                icon={<PlusIcon />}
                                            >
                                                Button Text
                                            </ButtonCustom>
                                        );
                                    }
                                })}
                            </div>

                            <div className="flex flex-col space-y-4">
                                {type.variant.map((variant, index) => {
                                    if (variant === EButtonType.Processing) {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                iconPosition={IconPossiton.Right}
                                                variant={variant}
                                                icon={<Loading className="animate-spin" />}
                                            >
                                                Button Text
                                            </ButtonCustom>
                                        );
                                    } else {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                variant={variant}
                                                iconPosition={IconPossiton.Right}
                                                icon={<PlusIcon />}
                                            >
                                                Button Text
                                            </ButtonCustom>
                                        );
                                    }
                                })}
                            </div>

                            <div className="flex flex-col space-y-4 max-w-fit">
                                {type.variant.map((variant, index) => {
                                    if (variant === EButtonType.Processing) {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                variant={variant}
                                                icon={<Loading className="animate-spin" />}
                                            ></ButtonCustom>
                                        );
                                    } else {
                                        return (
                                            <ButtonCustom
                                                key={index}
                                                size={type.size}
                                                theme={type.theme}
                                                variant={variant}
                                                icon={<PlusIcon />}
                                            ></ButtonCustom>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
