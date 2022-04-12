// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var registry_pb = require('./registry_pb.cjs');

function serialize_discovery_DeregisterRequest(arg) {
  if (!(arg instanceof registry_pb.DeregisterRequest)) {
    throw new Error('Expected argument of type discovery.DeregisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_DeregisterRequest(buffer_arg) {
  return registry_pb.DeregisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_DeregisterResponse(arg) {
  if (!(arg instanceof registry_pb.DeregisterResponse)) {
    throw new Error('Expected argument of type discovery.DeregisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_DeregisterResponse(buffer_arg) {
  return registry_pb.DeregisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_GetRequest(arg) {
  if (!(arg instanceof registry_pb.GetRequest)) {
    throw new Error('Expected argument of type discovery.GetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_GetRequest(buffer_arg) {
  return registry_pb.GetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_GetResponse(arg) {
  if (!(arg instanceof registry_pb.GetResponse)) {
    throw new Error('Expected argument of type discovery.GetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_GetResponse(buffer_arg) {
  return registry_pb.GetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_HealthCheckRequest(arg) {
  if (!(arg instanceof registry_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type discovery.HealthCheckRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_HealthCheckRequest(buffer_arg) {
  return registry_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_HealthCheckResponse(arg) {
  if (!(arg instanceof registry_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type discovery.HealthCheckResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_HealthCheckResponse(buffer_arg) {
  return registry_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_RegisterRequest(arg) {
  if (!(arg instanceof registry_pb.RegisterRequest)) {
    throw new Error('Expected argument of type discovery.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_RegisterRequest(buffer_arg) {
  return registry_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_discovery_RegisterResponse(arg) {
  if (!(arg instanceof registry_pb.RegisterResponse)) {
    throw new Error('Expected argument of type discovery.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_discovery_RegisterResponse(buffer_arg) {
  return registry_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var RegistryService = exports.RegistryService = {
  deregister: {
    path: '/discovery.Registry/Deregister',
    requestStream: false,
    responseStream: false,
    requestType: registry_pb.DeregisterRequest,
    responseType: registry_pb.DeregisterResponse,
    requestSerialize: serialize_discovery_DeregisterRequest,
    requestDeserialize: deserialize_discovery_DeregisterRequest,
    responseSerialize: serialize_discovery_DeregisterResponse,
    responseDeserialize: deserialize_discovery_DeregisterResponse,
  },
  get: {
    path: '/discovery.Registry/Get',
    requestStream: false,
    responseStream: false,
    requestType: registry_pb.GetRequest,
    responseType: registry_pb.GetResponse,
    requestSerialize: serialize_discovery_GetRequest,
    requestDeserialize: deserialize_discovery_GetRequest,
    responseSerialize: serialize_discovery_GetResponse,
    responseDeserialize: deserialize_discovery_GetResponse,
  },
  healthCheck: {
    path: '/discovery.Registry/HealthCheck',
    requestStream: false,
    responseStream: false,
    requestType: registry_pb.HealthCheckRequest,
    responseType: registry_pb.HealthCheckResponse,
    requestSerialize: serialize_discovery_HealthCheckRequest,
    requestDeserialize: deserialize_discovery_HealthCheckRequest,
    responseSerialize: serialize_discovery_HealthCheckResponse,
    responseDeserialize: deserialize_discovery_HealthCheckResponse,
  },
  register: {
    path: '/discovery.Registry/Register',
    requestStream: false,
    responseStream: false,
    requestType: registry_pb.RegisterRequest,
    responseType: registry_pb.RegisterResponse,
    requestSerialize: serialize_discovery_RegisterRequest,
    requestDeserialize: deserialize_discovery_RegisterRequest,
    responseSerialize: serialize_discovery_RegisterResponse,
    responseDeserialize: deserialize_discovery_RegisterResponse,
  },
};

exports.RegistryClient = grpc.makeGenericClientConstructor(RegistryService);
