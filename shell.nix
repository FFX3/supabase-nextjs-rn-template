{ pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    buildInputs = with pkgs; [
        deno
        nodejs
        watchman
        sqitchPg
    ];
}
