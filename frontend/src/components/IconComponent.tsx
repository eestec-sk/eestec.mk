"use client";

import React from "react";
import { IconType } from "react-icons";

interface IconProps {
    icon: IconType;
    color: string;
    size: string;
}

export default function IconComponent({ icon: Icon, color, size } : IconProps) {
    return(
        <Icon color={color} size={size}/>
    );
}