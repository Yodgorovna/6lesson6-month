import React, { forwardRef, useMemo } from "react";
import { TbLoader } from "react-icons/tb";
import { outlineButton, solidButton, ghostButton } from "./ButtonStyle";

// define all the button attributes
// In JavaScript, no need to explicitly declare types.
// React.ComponentPropsWithoutRef<"button"> is not necessary in JavaScript.
// The ref type is also automatically inferred in JavaScript.
// So, we remove these TypeScript-specific declarations.

// extend the base button attributes
// Similarly, no need to explicitly declare interfaces in JavaScript.
// Just use object destructuring in function parameters.

const Button = forwardRef((props, ref) => {
  // destructure necessary props
  const {
    type,
    children,
    buttonStyle,
    buttonVariant,
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  // determine icon placement
  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = <TbLoader className="animate-spin" size={25} />;
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? "right" : "left",
    };
  }, [isLoading, leftIcon, rightIcon]);

  const renderButtonVariant = () => {
    if (buttonVariant === "solid") {
      return solidButton({ ...buttonStyle, className });
    }
    if (buttonVariant === "outline") {
      return outlineButton({ ...buttonStyle, className });
    }
    return ghostButton({ ...buttonStyle, className });
  };

  return (
    <button
      className={renderButtonVariant()}
      {...rest}
      type={type ? "submit" : "button"}
      ref={ref}
      disabled={disabled || isLoading}
    >
      {/* render icon before */}
      {icon && iconPlacement === "left" && (
        <span
          className={`inline-flex shrink-0 self-center ${
            children && !isLoading && "mr-2"
          }`}
        >
          {icon}
        </span>
      )}

      {/* hide button text during loading state */}
      {!isLoading && children}

      {/* render icon after */}
      {icon && iconPlacement === "right" && (
        <span
          className={`inline-flex shrink-0 self-center ${
            children && !isLoading && "ml-2"
          }`}
        >
          {icon}
        </span>
      )}
    </button>
  );
});

// set default props
Button.defaultProps = {
  buttonStyle: {},
  buttonVariant: "solid",
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
};

export default Button;
