# Mock Prover

## Endpoints

- `/add_job` : POST
- `/get_status` : POST
- `/txn/state-update` : POST

## Build

```sh
cp .env.example .env

# Fill the env vars

docker build -t mock-prover .
```

## Run

```sh
docker run mock-prover
```
