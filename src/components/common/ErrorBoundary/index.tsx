// import React, { Component } from 'react'
// import DefaultErrorTip from './DefaultErrorTip';

// interface Props {
//     needErrorTip: boolean;
//     fallbackComponent?: React.ReactNode;
//     children: React.ReactNode;
//     errorHandler?: (error: Error) => void;
// }

// interface State {
//     hasError: boolean;
// }
// class ErrorCatch extends Component<Props, State> {
//     constructor(props: Props) {
//         super(props)
//         this.state = { hasError: false};
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//         const { needErrorTip, errorHandler } = this.props;
//         this.setState({
//             hasError: !!needErrorTip
//         });
//         try {
//             if (errorHandler) {
//                 errorHandler(error);
//             }
//             this.dispatchErrorEvent(error, info);
//         } catch (e: any) {
//             this.dispatchErrorEvent(e);
//         }
//     }

//     dispatchErrorEvent(error: Error, info?: React.ErrorInfo): void {
//         console.error('error-stack', error.stack);
//         console.error('React.ErrorInfo', info);
//     }

//     handleResetError = (): void => {
//         this.setState({ hasError: false });
//     }

//     render = () => {
//         const { hasError } = this.state;
//         const { fallbackComponent, children } = this.props;
//         if (hasError) {
//             return fallbackComponent || <DefaultErrorTip resetError={this.handleResetError} />;
//         }
//         return children;
//     }
// }

// export default ErrorCatch;
