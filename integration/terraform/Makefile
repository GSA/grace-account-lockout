.PHONY: check apply plan validate init destroy
check:
ifeq ($(strip $(backend_bucket)),)
	@echo "backend_bucket must be provided"
	@exit 1
endif
ifeq ($(strip $(backend_key)),)
	@echo "backend_key must be provided"
	@exit 1
endif

apply: plan
	terraform apply --auto-approve

plan: validate
	terraform plan

validate: init
	terraform validate
	terrascan --location . --tests all

init: check
	terraform init -backend-config="bucket=$(backend_bucket)" -backend-config="key=$(backend_key)"

destroy:
	terraform --destroy --auto-approve
