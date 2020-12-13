#!/bin/sh
mkdir -p binary

for file in ./*.proto
do
	echo "\tcompiling registry ${file}"
	grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./binary --grpc_out=./binary file
done