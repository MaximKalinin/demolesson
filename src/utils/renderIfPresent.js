import React from 'react';
export const renderIfPresent = (Component, props) => Component ? <Component { ...props } /> : null;