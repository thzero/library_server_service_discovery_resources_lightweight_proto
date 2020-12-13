@mkdir binary
@FOR %%G IN (.\*.proto) DO @(
	@echo compiling transport '%%G'
	call grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./binary --grpc_out=grpc_js:./binary %%G
)