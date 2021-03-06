import * as zeromq from "zeromq";
import {
    format_endpoint,
    server_publisher_socket_addrs,
    count_of_messages_that_should_be_sended_every_timeout,
} from "./helpers";

async function run_receiver(server_publisher_socket_addrs: Array<string>) {
    const receiver = new zeromq.Subscriber();

    console.log("init receiver");

    for (const publisher_addr of server_publisher_socket_addrs) {
        receiver.connect(format_endpoint(publisher_addr));
        receiver.subscribe();
    }

    console.log("receiver connected to all publishers");

    let total_received = 0;
    for (;;) {
        await receiver.receive();
        total_received++;

        if (total_received % count_of_messages_that_should_be_sended_every_timeout == 0) {
            let date = new Date();
            console.log(
                `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} | received ${total_received} message`,
            );
        }
    }
}

run_receiver(server_publisher_socket_addrs).catch((e) => console.error(e));
