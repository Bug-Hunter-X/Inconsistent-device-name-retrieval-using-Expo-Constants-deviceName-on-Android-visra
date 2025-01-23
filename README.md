# Inconsistent Device Name Retrieval using Expo Constants.deviceName on Android

This repository demonstrates a bug where `Expo.Constants.deviceName` inconsistently returns an empty string or `null` on Android devices.  The issue is not consistently reproducible, making debugging difficult.  The provided code examples illustrate the problem and a potential solution involving a fallback mechanism.

## Bug Report

The `Expo.Constants.deviceName` API is expected to provide the device's name. However, in certain scenarios, it returns an empty string or `null`, even though the device name is correctly set within Android settings. This inconsistency can negatively affect applications relying on device identification for personalization or other features.

## Steps to Reproduce

1. Run the provided `bug.js` code on an Android device.
2. Observe that `Constants.deviceName` sometimes returns an empty string or `null`.
3. This inconsistency is non-deterministic and may require multiple runs to reproduce reliably.

## Solution

The `bugSolution.js` file provides a modified version that includes a fallback mechanism. If `Constants.deviceName` returns an empty string or `null`, it attempts to retrieve the device name using a different approach (currently a placeholder; further investigation needed to identify a reliable alternative).