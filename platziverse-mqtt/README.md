# platziverse-mqtt

## `agent/connected`

``` js

{
    agent: {
        uuid, // auto generate
        username, // define by configuration
        name, // define by configuration
        hostname, // get by S.O
        pid // get by process
    }
}

```

## `agent/disconnected`

``` js

{
    agent: {
        uuid
    }
}

```

## `agent/message`

``` js

{
    agent,
    metrics: [
        {
            type,
            value
        }
    ],
    timestamp // generate when message is created
}

```