{ pkgs ? import <nixpkgs> {} }:

with pkgs;
mkShell {
    buildInputs = with pkgs; [
      nodejs
      yarn
    ];
}
