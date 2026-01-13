#!/usr/bin/env python3
import argparse
import pathlib
import re
import sys

pattern = re.compile(r"^(?P<prefix>\s*[^#\n]+:\s*)(?P<number>[-+]?\d*\.?\d+(?:[eE][-+]?\d+)?)\s*$")


def format_number(value: float) -> str:
    return f"{value:.15g}"


def scale_file(path: pathlib.Path, multiplier: float) -> bool:
    lines = path.read_text(encoding="utf-8").splitlines(True)
    output = []
    in_loot = False
    in_entries = False
    loot_indent = 0
    entries_indent = 0
    changed = False

    for line in lines:
        stripped = line.lstrip(" \t")
        indent = len(line) - len(stripped)

        if in_entries and indent <= entries_indent:
            in_entries = False
        if in_loot and indent <= loot_indent and not stripped.startswith("lootData:"):
            in_loot = False

        if not in_loot and stripped.startswith("lootData:"):
            in_loot = True
            loot_indent = indent
        if in_loot and not in_entries and stripped.startswith("entries:"):
            in_entries = True
            entries_indent = indent

        if in_entries and indent > entries_indent:
            match = pattern.match(line.rstrip("\n"))
            if match:
                new_value = float(match.group("number")) * multiplier
                replacement = f"{match.group('prefix')}{format_number(new_value)}"
                if line.endswith("\n"):
                    replacement += "\n"
                if replacement != line:
                    line = replacement
                    changed = True

        output.append(line)

    if changed:
        path.write_text("".join(output), encoding="utf-8")
    return changed


def main() -> int:
    parser = argparse.ArgumentParser(description="Scale relic spawn likelihoods.")
    parser.add_argument("multiplier", type=float, help="Factor to multiply loot chances by.")
    parser.add_argument("--dir", dest="target_dir", default=None, help="Directory containing relic YAML files.")
    args = parser.parse_args()

    base_dir = pathlib.Path(__file__).resolve().parent.parent
    target_dir = pathlib.Path(args.target_dir) if args.target_dir else base_dir / "config" / "relics" / "relics"

    if not target_dir.is_dir():
        sys.exit(f"Missing directory: {target_dir}")

    files = sorted(target_dir.glob("*.yaml"))
    if not files:
        sys.exit(f"No relic configs found in {target_dir}")

    changed_any = False
    for path in files:
        if scale_file(path, args.multiplier):
            print(f"updated {path}")
            changed_any = True

    if not changed_any:
        print("No changes applied")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
