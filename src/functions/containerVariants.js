function framerMotionVariants(opacity, transitionDuration, exitXValue) {
    const containerVariants = {
        hidden: {
            opacity: opacity,
        },
        visible: {
            opacity: 1,
            transition: { delay: 0, duration: transitionDuration }
        },
        exit: {
            x: `${exitXValue}%`,
            transition: { ease: "easeInOut" }
        }
    }

    return containerVariants;
};

export default framerMotionVariants;