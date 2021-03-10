export const send_commands_timeout_millis: number = 1000;
export const count_of_commands_that_should_be_sended_every_timeout: number = 30000;
export const message_content_length: number = 16;
export const server_router_socket_addr: string = "0.0.0.0:56731";
export const server_publisher_socket_addrs: Array<string> = [
    "0.0.0.0:56738",
    "0.0.0.0:56739",
    "0.0.0.0:56740",
];

export function sleep(millis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, millis));
}

export function format_endpoint(endpoint: string): string {
    return `tcp://${endpoint}`;
}
